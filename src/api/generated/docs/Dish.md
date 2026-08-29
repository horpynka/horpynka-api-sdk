# Dish


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**categoryId** | **number** |  | [default to undefined]
**category** | [**Category**](Category.md) |  | [default to undefined]
**ownPrice** | **number** |  | [default to undefined]
**sellingPrice** | **number** |  | [default to undefined]
**selling** | **boolean** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**dishIngredients** | [**Array&lt;DishIngredient&gt;**](DishIngredient.md) |  | [default to undefined]

## Example

```typescript
import { Dish } from './api';

const instance: Dish = {
    id,
    name,
    categoryId,
    category,
    ownPrice,
    sellingPrice,
    selling,
    createdAt,
    updatedAt,
    dishIngredients,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
