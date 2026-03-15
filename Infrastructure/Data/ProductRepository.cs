using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class ProductRepository(StoreContext context) : IProductRepository
{
    private readonly StoreContext context = context;

    public void AddProduct(Product product)
    {
        context.Products.Add(product);
    }

    public void DeleteProduct(Product product)
    {
        context.Products.Remove(product);
    }

    public async Task<IReadOnlyList<string>> GetBrandsAsync()
    {
        return await context.Products.Select(x => x.Brand).Distinct().ToListAsync();
    }

    public async Task<Product?> GetProductByIdAsync(int Id)
    {
        return await context.Products.FindAsync(Id);
    }

    public async Task<IReadOnlyList<Product>> GetProductsAsync(string? brands, string? types, string? sort)
    {
        var query = context.Products.AsQueryable();

        if(!string.IsNullOrWhiteSpace(brands )) query = query.Where(x => x.Brand == brands);

        if(!string.IsNullOrWhiteSpace(types )) query = query.Where(x => x.Type == types);

         
            query =sort switch
            {
                "priceAsc" => query.OrderBy(x =>x.Price),
                "priceDesc" => query.OrderByDescending(x =>x.Price),
                 _=> query.OrderBy(x =>x.Name),
            };
        

        return await query.ToListAsync();
    }

    public async Task<IReadOnlyList<string>> GetTypesAsync()
    {
       return await context.Products.Select(x => x.Type).Distinct().ToListAsync();
    }

    public bool ProductExists(int Id)
    {
        return context.Products.Any(x => x.Id == Id);
    }

    public async Task<bool> SaveChangesAsync()
    {
        return await context.SaveChangesAsync() >0;
    }

    public void UpdateProduct(Product product)
    {
        context.Entry(product).State = EntityState.Modified;
    }
}
