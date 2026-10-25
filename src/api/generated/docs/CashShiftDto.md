# CashShiftDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**openedAt** | **string** |  | [default to undefined]
**closedAt** | **string** |  | [default to undefined]
**openingBalance** | **number** |  | [default to undefined]
**cashSales** | **number** |  | [default to undefined]
**cardSales** | **number** |  | [default to undefined]
**refunds** | **number** |  | [default to undefined]
**closingBalance** | **number** | Expected cash in the drawer: opening balance plus cash sales, minus cash refunds. | [default to undefined]
**actualClosingBalance** | **number** | Cash counted in the drawer at close, in kopecks. Null while the shift is open. | [default to undefined]
**difference** | **number** | &#x60;actualClosingBalance&#x60; minus &#x60;closingBalance&#x60;, in kopecks. Positive when the drawer holds more cash than expected. Null while the shift is open. | [default to undefined]
**ordersCount** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**cashierName** | **string** |  | [default to undefined]

## Example

```typescript
import { CashShiftDto } from './api';

const instance: CashShiftDto = {
    id,
    openedAt,
    closedAt,
    openingBalance,
    cashSales,
    cardSales,
    refunds,
    closingBalance,
    actualClosingBalance,
    difference,
    ordersCount,
    status,
    cashierName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
