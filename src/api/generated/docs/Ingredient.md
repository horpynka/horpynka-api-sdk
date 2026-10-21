# Ingredient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**measurementUnit** | **string** |  | [default to undefined]
**stockQuantity** | **number** | Current remainder in &#x60;measurementUnit&#x60;. Snapshotted when a check starts. | [default to undefined]
**dishIngredients** | [**Array&lt;DishIngredient&gt;**](DishIngredient.md) |  | [default to undefined]

## Example

```typescript
import { Ingredient } from './api';

const instance: Ingredient = {
    id,
    name,
    measurementUnit,
    stockQuantity,
    dishIngredients,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
