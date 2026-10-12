# CreateDishDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**categoryId** | **number** |  | [default to undefined]
**ownPrice** | **number** |  | [default to undefined]
**sellingPrice** | **number** |  | [default to undefined]
**selling** | **boolean** |  | [default to undefined]
**ingredients** | [**Set&lt;CreateDishIngredientDto&gt;**](CreateDishIngredientDto.md) |  | [default to undefined]

## Example

```typescript
import { CreateDishDto } from './api';

const instance: CreateDishDto = {
    name,
    categoryId,
    ownPrice,
    sellingPrice,
    selling,
    ingredients,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
