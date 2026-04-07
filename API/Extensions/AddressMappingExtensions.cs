using API.DTOs;
using Core.Entities;

namespace API.Extensions;

public static class AddressMappingExtensions
{
    public static AddressDTO? ToDto(this Address? address)
    {
        if(address == null) return null;

        return new AddressDTO
        {
            Line1 = address.Line1,
            Line2 = address.Line2,
            City = address.City,
            State = address.State,
            Country = address.Country,
            PostalCode = address.PostalCode,

            
        };

    }

    public static Address ToEntity(this AddressDTO addressDto)
    {
        if(addressDto == null) throw new ArgumentNullException(nameof(addressDto));

        return new Address
        {
            Line1 = addressDto.Line1,
            Line2 = addressDto.Line2,
            City = addressDto.City,
            State = addressDto.State,
            Country = addressDto.Country,
            PostalCode = addressDto.PostalCode,

            
        };
        
    }


    public static void UpdateFromDto(this Address address, AddressDTO addressDTO)
    {
        if(addressDTO == null) throw new ArgumentNullException(nameof(addressDTO));

        if(address == null) throw new ArgumentNullException(nameof(address));

         
            address.Line1 = addressDTO.Line1;
            address.Line2 = addressDTO.Line2;
            address.City = addressDTO.City;
            address.State = addressDTO.State;
            address.Country = addressDTO.Country;
            address.PostalCode = addressDTO.PostalCode;

            
        
    }

    
}
