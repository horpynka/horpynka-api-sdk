# Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**orderPrice** | **number** |  | [default to undefined]
**paidWithCash** | **number** |  | [default to undefined]
**paidWithCard** | **number** |  | [default to undefined]
**refundedWithCash** | **number** |  | [default to undefined]
**refundedWithCard** | **number** |  | [default to undefined]
**orderItems** | [**Array&lt;OrderItem&gt;**](OrderItem.md) |  | [default to undefined]

## Example

```typescript
import { Order } from './api';

const instance: Order = {
    id,
    status,
    createdAt,
    updatedAt,
    orderPrice,
    paidWithCash,
    paidWithCard,
    refundedWithCash,
    refundedWithCard,
    orderItems,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
