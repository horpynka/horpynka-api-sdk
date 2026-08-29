# CreateOrderDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | @default CREATED | [optional] [default to undefined]
**orderPrice** | **number** |  | [default to undefined]
**paidWithCash** | **number** |  | [default to undefined]
**paidWithCard** | **number** |  | [default to undefined]
**refundedWithCash** | **number** |  | [default to undefined]
**refundedWithCard** | **number** |  | [default to undefined]

## Example

```typescript
import { CreateOrderDto } from './api';

const instance: CreateOrderDto = {
    status,
    orderPrice,
    paidWithCash,
    paidWithCard,
    refundedWithCash,
    refundedWithCard,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
