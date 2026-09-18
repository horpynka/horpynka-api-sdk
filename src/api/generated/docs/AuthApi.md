# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSession**](#getsession) | **GET** /auth/get-session | |
|[**refresh**](#refresh) | **GET** /auth/refresh | |
|[**signIn**](#signin) | **POST** /auth/sign-in | |
|[**signUp**](#signup) | **POST** /auth/sign-up | |

# **getSession**
> SessionResponseDto getSession()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.getSession();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SessionResponseDto**

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

# **refresh**
> refresh()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.refresh();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signIn**
> AccessTokenResponseDto signIn(signInUserDTO)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    SignInUserDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let signInUserDTO: SignInUserDTO; //

const { status, data } = await apiInstance.signIn(
    signInUserDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signInUserDTO** | **SignInUserDTO**|  | |


### Return type

**AccessTokenResponseDto**

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

# **signUp**
> AccessTokenResponseDto signUp(signUpUserDTO)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    SignUpUserDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let signUpUserDTO: SignUpUserDTO; //

const { status, data } = await apiInstance.signUp(
    signUpUserDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signUpUserDTO** | **SignUpUserDTO**|  | |


### Return type

**AccessTokenResponseDto**

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

