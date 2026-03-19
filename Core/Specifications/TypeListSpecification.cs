using Core.Entities;
 
namespace  Core.Interfaces;

public class TypeListSpecification :BaseSpecification<Product, string >
{
    public TypeListSpecification()
    {
        AddSelect(x => x.Type);
        ApplyDistinct();
    }
     
}