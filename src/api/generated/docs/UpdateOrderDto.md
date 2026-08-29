# UpdateOrderDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | @default CREATED | [optional] [default to undefined]
**orderPrice** | **number** |  | [optional] [default to undefined]
**paidWithCash** | **number** |  | [optional] [default to undefined]
**paidWithCard** | **number** |  | [optional] [default to undefined]
**refundedWithCash** | **number** |  | [optional] [default to undefined]
**refundedWithCard** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOrderDto } from './api';

const instance: UpdateOrderDto = {
    status,
    orderPrice,
    paidWithCash,
    paidWithCard,
    refundedWithCash,
    refundedWithCard,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
