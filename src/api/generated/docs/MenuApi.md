# MenuApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**findAll**](#findall) | **GET** /menu | |
|[**findCatalog**](#findcatalog) | **GET** /menu/catalog | |
|[**updateSelling**](#updateselling) | **PATCH** /menu/{id}/selling | |

# **findAll**
> Array<MenuItemDto> findAll()


### Example

```typescript
import {
    MenuApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MenuApi(configuration);

const { status, data } = await apiInstance.findAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<MenuItemDto>**

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

# **findCatalog**
> Array<MenuItemDto> findCatalog()


### Example

```typescript
import {
    MenuApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MenuApi(configuration);

const { status, data } = await apiInstance.findCatalog();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<MenuItemDto>**

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

# **updateSelling**
> MenuItemDto updateSelling(updateMenuItemSellingDto)


### Example

```typescript
import {
    MenuApi,
    Configuration,
    UpdateMenuItemSellingDto
} from './api';

const configuration = new Configuration();
const apiInstance = new MenuApi(configuration);

let id: string; // (default to undefined)
let updateMenuItemSellingDto: UpdateMenuItemSellingDto; //

const { status, data } = await apiInstance.updateSelling(
    id,
    updateMenuItemSellingDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMenuItemSellingDto** | **UpdateMenuItemSellingDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**MenuItemDto**

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

