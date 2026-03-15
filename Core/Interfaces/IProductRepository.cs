namespace Core.Entities;

public interface IProductRepository
{
    //CRUD Operations In Interface
    Task<IReadOnlyList<Product>> GetProductsAsync(string? brands, string? types, string? sort);
    Task<Product?> GetProductByIdAsync(int Id);

    Task<IReadOnlyList<string>> GetBrandsAsync();
    Task<IReadOnlyList<string>> GetTypesAsync();
    void AddProduct(Product product);
    void UpdateProduct(Product product);
    void DeleteProduct(Product product);
    bool ProductExists(int Id);
    Task<bool> SaveChangesAsync();




}