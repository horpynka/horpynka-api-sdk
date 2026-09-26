# DashboardStatsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**todaySales** | **number** |  | [default to undefined]
**ordersCount** | **number** |  | [default to undefined]
**openOrders** | **number** |  | [default to undefined]
**closedOrders** | **number** |  | [default to undefined]
**cashSales** | **number** |  | [default to undefined]
**cardSales** | **number** |  | [default to undefined]
**refunds** | **number** |  | [default to undefined]
**averageOrder** | **number** |  | [default to undefined]
**currentShift** | [**CashShiftDto**](CashShiftDto.md) |  | [default to undefined]
**salesByDay** | [**Array&lt;SalesByDayDto&gt;**](SalesByDayDto.md) |  | [default to undefined]
**paymentSplit** | [**Array&lt;PaymentSplitDto&gt;**](PaymentSplitDto.md) |  | [default to undefined]

## Example

```typescript
import { DashboardStatsDto } from './api';

const instance: DashboardStatsDto = {
    todaySales,
    ordersCount,
    openOrders,
    closedOrders,
    cashSales,
    cardSales,
    refunds,
    averageOrder,
    currentShift,
    salesByDay,
    paymentSplit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
