# OrdersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create**](#create) | **POST** /orders | |
|[**findAll**](#findall) | **GET** /orders | |
|[**findOne**](#findone) | **GET** /orders/{id} | |
|[**removeActiveReceipt**](#removeactivereceipt) | **PATCH** /orders/remove-active-receipt/{id} | |
|[**update**](#update) | **PATCH** /orders/{id} | |

# **create**
> Order create(createOrderDto)


### Example

```typescript
import {
    OrdersApi,
    Configuration,
    CreateOrderDto
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let createOrderDto: CreateOrderDto; //

const { status, data } = await apiInstance.create(
    createOrderDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrderDto** | **CreateOrderDto**|  | |


### Return type

**Order**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findAll**
> Array<Order> findAll()


### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let page: number; //Defaults to 1 (optional) (default to undefined)
let limit: number; //Defaults to 10 (optional) (default to undefined)
let status: 'CREATED' | 'PAID' | 'CANCELLED' | 'DELETED' | 'REFUNDED' | 'COMPLETED'; //Defaults to CREATED (optional) (default to undefined)
let search: string; //Receipt number or status substring (optional) (default to undefined)
let from: string; //Inclusive start date in Europe/Kyiv (YYYY-MM-DD) (optional) (default to undefined)
let to: string; //Inclusive end date in Europe/Kyiv (YYYY-MM-DD) (optional) (default to undefined)

const { status, data } = await apiInstance.findAll(
    page,
    limit,
    status,
    search,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Defaults to 1 | (optional) defaults to undefined|
| **limit** | [**number**] | Defaults to 10 | (optional) defaults to undefined|
| **status** | [**&#39;CREATED&#39; | &#39;PAID&#39; | &#39;CANCELLED&#39; | &#39;DELETED&#39; | &#39;REFUNDED&#39; | &#39;COMPLETED&#39;**]**Array<&#39;CREATED&#39; &#124; &#39;PAID&#39; &#124; &#39;CANCELLED&#39; &#124; &#39;DELETED&#39; &#124; &#39;REFUNDED&#39; &#124; &#39;COMPLETED&#39;>** | Defaults to CREATED | (optional) defaults to undefined|
| **search** | [**string**] | Receipt number or status substring | (optional) defaults to undefined|
| **from** | [**string**] | Inclusive start date in Europe/Kyiv (YYYY-MM-DD) | (optional) defaults to undefined|
| **to** | [**string**] | Inclusive end date in Europe/Kyiv (YYYY-MM-DD) | (optional) defaults to undefined|


### Return type

**Array<Order>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findOne**
> Order findOne()


### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.findOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Order**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeActiveReceipt**
> Order removeActiveReceipt()


### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.removeActiveReceipt(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Order**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> Order update(updateOrderDto)


### Example

```typescript
import {
    OrdersApi,
    Configuration,
    UpdateOrderDto
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: number; // (default to undefined)
let updateOrderDto: UpdateOrderDto; //

const { status, data } = await apiInstance.update(
    id,
    updateOrderDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderDto** | **UpdateOrderDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Order**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

