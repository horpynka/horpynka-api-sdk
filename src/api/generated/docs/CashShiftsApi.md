# CashShiftsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**close**](#close) | **POST** /cash-shifts/{id}/close | |
|[**findAll**](#findall) | **GET** /cash-shifts | |
|[**findOne**](#findone) | **GET** /cash-shifts/{id} | |
|[**open**](#open) | **POST** /cash-shifts | |

# **close**
> CashShiftDto close(closeCashShiftDto)


### Example

```typescript
import {
    CashShiftsApi,
    Configuration,
    CloseCashShiftDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CashShiftsApi(configuration);

let id: number; // (default to undefined)
let closeCashShiftDto: CloseCashShiftDto; //

const { status, data } = await apiInstance.close(
    id,
    closeCashShiftDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **closeCashShiftDto** | **CloseCashShiftDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**CashShiftDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** | Зміну вже закрито |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findAll**
> Array<CashShiftDto> findAll()


### Example

```typescript
import {
    CashShiftsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashShiftsApi(configuration);

const { status, data } = await apiInstance.findAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashShiftDto>**

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
> CashShiftDto findOne()


### Example

```typescript
import {
    CashShiftsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashShiftsApi(configuration);

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

**CashShiftDto**

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

# **open**
> CashShiftDto open(openCashShiftDto)


### Example

```typescript
import {
    CashShiftsApi,
    Configuration,
    OpenCashShiftDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CashShiftsApi(configuration);

let openCashShiftDto: OpenCashShiftDto; //

const { status, data } = await apiInstance.open(
    openCashShiftDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **openCashShiftDto** | **OpenCashShiftDto**|  | |


### Return type

**CashShiftDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**409** | Вже є відкрита зміна |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

