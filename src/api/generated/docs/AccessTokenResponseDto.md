# AccessTokenResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **string** |  | [default to undefined]
**refreshToken** | **string** | Returned when the request includes &#x60;X-Client-Type: mobile&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { AccessTokenResponseDto } from './api';

const instance: AccessTokenResponseDto = {
    accessToken,
    refreshToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
