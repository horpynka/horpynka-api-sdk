# DishesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create**](#create) | **POST** /dishes | |
|[**findAll**](#findall) | **GET** /dishes | |
|[**findOne**](#findone) | **GET** /dishes/{id} | |
|[**remove**](#remove) | **DELETE** /dishes/{id} | |
|[**update**](#update) | **PATCH** /dishes/{id} | |

# **create**
> Dish create(createDishDto)


### Example

```typescript
import {
    DishesApi,
    Configuration,
    CreateDishDto
} from './api';

const configuration = new Configuration();
const apiInstance = new DishesApi(configuration);

let createDishDto: CreateDishDto; //

const { status, data } = await apiInstance.create(
    createDishDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDishDto** | **CreateDishDto**|  | |


### Return type

**Dish**

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

# **remove**
> remove()


### Example

```typescript
import {
    DishesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DishesApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.remove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** |  |  -  |
|**409** | Страву не можна видалити, бо вона є в замовленнях |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> Dish update(updateDishDto)


### Example

```typescript
import {
    DishesApi,
    Configuration,
    UpdateDishDto
} from './api';

const configuration = new Configuration();
const apiInstance = new DishesApi(configuration);

let id: number; // (default to undefined)
let updateDishDto: UpdateDishDto; //

const { status, data } = await apiInstance.update(
    id,
    updateDishDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateDishDto** | **UpdateDishDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Dish**

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

