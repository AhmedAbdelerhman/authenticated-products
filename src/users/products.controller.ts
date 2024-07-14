import { PageOptionsDto } from '@app/libs/pagination/pageOption.dto';
import { Controller, Get, HttpStatus, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { UsersGuard } from './guards/users.guard';
import { ProductsService } from './products.service';
import { Response } from 'express';
import { join } from 'path';
import { AdminStaticsService } from '@app/admin/admin-statics.service';


@Controller("v1")
@ApiTags('get products') // Optional: Add tags for better organization

export class ProductsController {




  constructor(private readonly productsService: ProductsService, private adminStaticsService: AdminStaticsService
  ) {
  }


  @UseGuards(UsersGuard)
  @Get("auth-products")
  @Throttle({ default: { limit: +process.env.authApiRatLimit || 30, ttl: +process.env.ttlRatLimit || 300 } })
  @ApiOperation({ summary: 'Get a list of items with authorization' })
  @ApiQuery({ name: 'page', required: true, description: 'pagination' })
  @ApiQuery({ name: 'limit', required: true, description: ' number of products per page ' })
  @ApiBearerAuth()
  authProducts(@Query() pageOptionsDto: PageOptionsDto,) {
    return this.productsService.findAllProducts(pageOptionsDto, "./auth-data.json")
  }

  @Throttle({ default: { limit: +process.env.publicApiRatLimit || 30, ttl: +process.env.ttlRatLimit || 300 } })
  @Get("public-products")
  @ApiOperation({ summary: 'Get a list of items without authorization' })
  @ApiQuery({ name: 'page', required: true, description: 'pagination' })
  @ApiQuery({ name: 'limit', required: true, description: ' number of products per page ' })

  publicProducts(@Query() pageOptionsDto: PageOptionsDto,) {
    return this.productsService.findAllProducts(pageOptionsDto, "./public-data.json")
  }


  @Throttle({ default: { limit: +process.env.publicApiRatLimit || 30, ttl: +process.env.ttlRatLimit || 300 } })
  @ApiOperation({ summary: 'downland postman collection' })
  @Get("download")
  downloadFile(@Res() res: Response) {
    const filePath = join(__dirname, '..', 'files', "auth-product.postman_collection.json");
    this.adminStaticsService.incrementCollectionDownloadsNumber()
    res.sendFile(filePath, (err) => {
      if (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('File not found');
      }
    });
  }

}
