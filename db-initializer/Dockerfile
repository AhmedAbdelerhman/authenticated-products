# Use the official SQL Server image as the base image
FROM mcr.microsoft.com/mssql/server

# Copy the SQL script to the container
COPY init.sql /usr/src/app/

# Set the working directory inside the container
WORKDIR /usr/src/app

# Environment variables for SQL Server configuration
ENV SA_PASSWORD=Ahmed1234!
ENV ACCEPT_EULA=Y

# Expose the SQL Server port
EXPOSE 1433

# Set the entrypoint to run the SQL script on container startup
ENTRYPOINT ["bash", "-c", "sleep 20s && /opt/mssql-tools/bin/sqlcmd -S mssql-db -U sa -P $SA_PASSWORD -d master -i init.sql"]

# Optionally, you can use CMD to pass additional arguments to the sqlcmd command, if needed
# CMD ["-r", "1"]