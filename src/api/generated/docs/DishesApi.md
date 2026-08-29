# DishesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**findAll**](#findall) | **GET** /dishes | |
|[**findOne**](#findone) | **GET** /dishes/{id} | |

# **findAll**
> Array<Dish> findAll()


### Example

```typescript
import {
    DishesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DishesApi(configuration);

const { status, data } = await apiInstance.findAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Dish>**

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
> Dish findOne()


### Example

```typescript
import {
    DishesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DishesApi(configuration);

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

**Dish**

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

