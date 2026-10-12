# ProductsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create**](#create) | **POST** /products | |
|[**findAll**](#findall) | **GET** /products | |
|[**findOne**](#findone) | **GET** /products/{id} | |
|[**remove**](#remove) | **DELETE** /products/{id} | |
|[**update**](#update) | **PATCH** /products/{id} | |

# **create**
> Product create(createProductDto)


### Example

```typescript
import {
    ProductsApi,
    Configuration,
    CreateProductDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let createProductDto: CreateProductDto; //

const { status, data } = await apiInstance.create(
    createProductDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProductDto** | **CreateProductDto**|  | |


### Return type

**Product**

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
> Array<Product> findAll()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

const { status, data } = await apiInstance.findAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Product>**

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
> Product findOne()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

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

**Product**

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
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

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
|**409** | Товар ще використовується |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> Product update(updateProductDto)


### Example

```typescript
import {
    ProductsApi,
    Configuration,
    UpdateProductDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: number; // (default to undefined)
let updateProductDto: UpdateProductDto; //

const { status, data } = await apiInstance.update(
    id,
    updateProductDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProductDto** | **UpdateProductDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Product**

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

