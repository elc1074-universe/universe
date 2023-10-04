# Backend do UniVerse

## Configuração

### Variáveis de ambiente

1. Faça uma cópia do arquivo [`.env.example`][exemplo-env];
2. Renomeie a cópia para `.env`;
3. Preencha as variáveis contidas na cópia.

### Execução

1. `npm install`
2. `npm run dev`

## Endpoints

### Usuário (`users`)

#### Buscar usuários

<details>
<summary><code>GET</code> <code><b>/api/users</b></code></summary>

##### Resposta

> | Código de status HTTP | Tipo de conteúdo   | Resposta                          |
> | :-------------------- | :----------------- | :-------------------------------- |
> | `200`                 | `application/json` | `ApiResponse<UserRetrievalDTO[]>` |
> | `4xx`, `5xx`          | `application/json` | `ApiResponse<ApiError>`           |

##### Exemplo cURL

> ```bash
>  curl http://localhost:3000/api/users --request GET
> ```

</details>

#### Buscar usuário

<details>
<summary><code>GET</code> <code><b>/api/users/{username}</b></code></summary>

##### Requisição

###### Parâmetros

> | Nome       | Tipo de dado | Obrigatório | Descrição                                                                                  |
> | :--------- | :----------- | :---------- | :----------------------------------------------------------------------------------------- |
> | `username` | `string`     | `true`      | O username do usuário. Deve ser uma string não nula/vazia de tamanho no intervalo [3, 63]. |

##### Resposta

> | Código de status HTTP | Tipo de conteúdo   | Resposta                        |
> | :-------------------- | :----------------- | :------------------------------ |
> | `200`                 | `application/json` | `ApiResponse<UserRetrievalDTO>` |
> | `4xx`, `5xx`          | `application/json` | `ApiResponse<ApiError>`         |

##### Exemplo cURL

> ```bash
>  curl http://localhost:3000/api/users/marcos --request GET
> ```

</details>

#### Salvar usuário

<details>
<summary><code>POST</code> <code><b>/api/users</b></code></summary>

##### Requisição

###### Corpo

> | Tipo de conteúdo   | Tipo de dado    | Obrigatório | Exemplo                                             |
> | :----------------- | :-------------- | :---------- | :-------------------------------------------------- |
> | `application/json` | `UserSavingDTO` | `true`      | `{"username": "teste", "email": "teste@gmail.com"}` |

##### Resposta

> | Código de status HTTP | Tipo de conteúdo   | Resposta                        |
> | :-------------------- | :----------------- | :------------------------------ |
> | `201`                 | `application/json` | `ApiResponse<UserRetrievalDTO>` |
> | `4xx`, `5xx`          | `application/json` | `ApiResponse<ApiError>`         |

##### Exemplo cURL

> ```bash
>  curl http://localhost:3000/api/users --request POST --header "Content-Type: application/json" --data '{"username": "teste", "email": "teste@gmail.com"}'
> ```

</details>

### Schemas

<details>
<summary><code>ApiHTTPStatus</code></summary>
<br>

> | Campo  | Tipo de dado | Exemplo     |
> | :----- | :----------- | :---------- |
> | `name` | `string`     | `"Created"` |
> | `code` | `number`     | `201`       |

</details>

<details>
<summary><code>ApiSubError</code></summary>
<br>

> | Campo     | Tipo de dado | Exemplo                                                                                         |
> | :-------- | :----------- | :---------------------------------------------------------------------------------------------- |
> | `message` | `string`     | `"O email do usuário deve ser uma string no formato RFC 5322 de tamanho no intervalo [6, 255]"` |

</details>

<details>
<summary><code>ApiError</code></summary>
<br>

> | Campo          | Tipo de dado    | Exemplo                                                                                                       |
> | :------------- | :-------------- | :------------------------------------------------------------------------------------------------------------ |
> | `httpStatus`   | `ApiHTTPStatus` | `{"name": "Bad Request", "code": 400}`                                                                        |
> | `message`      | `string`        | `"Requisição malformada"`                                                                                     |
> | `debugMessage` | `string`        | `"O email informado é inválido"`                                                                              |
> | `subErrors`    | `ApiSubError[]` | `[{"message": "O email do usuário deve ser uma string no formato RFC 5322 de tamanho no intervalo [6, 255]"]` |
> | `timestamp`    | `string`        | `"22/08/2023 18:21:04"`                                                                                       |

</details>

<details>
<summary><code>ApiResponse&lt;T&gt;</code></summary>
<br>

> | Campo        | Tipo de dado    | Exemplo                                                                      |
> | :----------- | :-------------- | :--------------------------------------------------------------------------- |
> | `success`    | `boolean`       | `14`                                                                         |
> | `httpStatus` | `ApiHTTPStatus` | `{"name": "Created", "code": 201}`                                           |
> | `data`       | `T`             | `{"id": 14, "code": "DLQ", "username": "teste", "email": "teste@gmail.com"}` |
> | `error`      | `ApiError`      | `null`                                                                       |
> | `timestamp`  | `string`        | `"22/08/2023 15:46:11"`                                                      |

</details>

<details>
<summary><code>UserRetrievalDTO</code></summary>
<br>

> | Campo      | Tipo de dado | Exemplo             |
> | :--------- | :----------- | :------------------ |
> | `id`       | `number`     | `14`                |
> | `code`     | `string`     | `"DLQ"`             |
> | `username` | `string`     | `"teste"`           |
> | `email`    | `string`     | `"teste@gmail.com"` |

</details>

<details>
<summary><code>UserSavingDTO</code></summary>
<br>

> | Campo      | Tipo de dado | Obrigatório | Exemplo             |
> | :--------- | :----------- | :---------- | :------------------ |
> | `username` | `string`     | `true`      | `"teste"`           |
> | `email`    | `string`     | `false`     | `"teste@gmail.com"` |

</details>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

<!-- Links -->

[exemplo-env]: <./.env.example> ".env.example"
