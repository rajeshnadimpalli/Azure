graph TD
    A[Resource Group] --> B[Azure VNet]
    B --> C[Subnet 1]
    B --> D[Subnet 2]
    
    C --> E[VM 1: Web Server]
    C --> F[VM 2: App Server]
    D --> G[Azure SQL Database]
    D --> H[Azure Blob Storage]
    
    I[Azure Load Balancer] --> E
    I --> F
    
    J[Azure Functions] --> F
    K[Azure Active Directory] --> E
    K --> F
    L[Azure App Service] --> E
