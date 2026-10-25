# Product


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**ownPrice** | **number** |  | [default to undefined]
**sellingPrice** | **number** |  | [default to undefined]
**measurementUnit** | **string** |  | [default to undefined]
**stockQuantity** | **number** | Quantitative remainder in &#x60;measurementUnit&#x60;. Null means the product is not tracked by quantity and is left out of inventory checks. | [default to undefined]
**categoryId** | **number** |  | [default to undefined]
**category** | [**Category**](Category.md) |  | [default to undefined]
**selling** | **boolean** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { Product } from './api';

const instance: Product = {
    id,
    name,
    ownPrice,
    sellingPrice,
    measurementUnit,
    stockQuantity,
    categoryId,
    category,
    selling,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
