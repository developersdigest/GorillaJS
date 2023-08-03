# GorillaJS

Gorilla JS is a Node.js application inspired by [Gorilla](https://github.com/ShishirPatil/gorilla). It allows users to send requests to a specified server and receive a list of commands that can be executed on the local machine.

## Requirements

- Node.js

## Installation

```
git clone <repository-url>
cd <repository-name>
npm install
```

## Usage

```
node <filename.js> <user_input>
```

## Configuration

The server URL and port are configured at the top of the script:

```
const SERVER_URL = "http://34.135.112.197:8000";
```

## How It Works

The script generates a unique user ID, takes user input from the command line, and sends a request to the server with the input and user ID. The server responds with a list of commands. The user selects a command by number, which is executed on their machine, and the output is printed to the console.

## Security Considerations

Please note that this application executes commands received from a remote server. Only use this with trusted sources, as it could potentially execute malicious commands on your system.

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at 

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## Contributing

Contributions are welcome. Please submit a pull request or create an issue to discuss the changes you propose.
