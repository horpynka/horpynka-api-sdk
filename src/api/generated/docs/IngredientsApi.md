# IngredientsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create**](#create) | **POST** /ingredients | |
|[**findAll**](#findall) | **GET** /ingredients | |
|[**findOne**](#findone) | **GET** /ingredients/{id} | |

# **create**
> Ingredient create(createIngredientDto)


### Example

```typescript
import {
    IngredientsApi,
    Configuration,
    CreateIngredientDto
} from './api';

const configuration = new Configuration();
const apiInstance = new IngredientsApi(configuration);

let createIngredientDto: CreateIngredientDto; //

const { status, data } = await apiInstance.create(
    createIngredientDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIngredientDto** | **CreateIngredientDto**|  | |


### Return type

**Ingredient**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**409** | Інгредієнт з такою назвою вже існує |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findAll**
> Array<Ingredient> findAll()


### Example

```typescript
import {
    IngredientsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IngredientsApi(configuration);

const { status, data } = await apiInstance.findAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Ingredient>**

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
> Ingredient findOne()


### Example

```typescript
import {
    IngredientsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IngredientsApi(configuration);

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

**Ingredient**

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

