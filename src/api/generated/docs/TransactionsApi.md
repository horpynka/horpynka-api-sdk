# TransactionsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**findAll**](#findall) | **GET** /transactions | |

# **findAll**
> Array<TransactionDto> findAll()


### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let from: string; //Inclusive start date in Europe/Kyiv (YYYY-MM-DD). Omit for no lower bound. (optional) (default to undefined)
let to: string; //Inclusive end date in Europe/Kyiv (YYYY-MM-DD). Omit for no upper bound. (optional) (default to undefined)

const { status, data } = await apiInstance.findAll(
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | Inclusive start date in Europe/Kyiv (YYYY-MM-DD). Omit for no lower bound. | (optional) defaults to undefined|
| **to** | [**string**] | Inclusive end date in Europe/Kyiv (YYYY-MM-DD). Omit for no upper bound. | (optional) defaults to undefined|


### Return type

**Array<TransactionDto>**

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

