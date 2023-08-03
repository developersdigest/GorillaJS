const http = require('http');
const child_process = require('child_process');
const readline = require('readline');

const SERVER_URL = "http://34.135.112.197:8000";
const uuid = require('os').userInfo().username + Math.random().toString(16).slice(2);
console.log('User ID:', uuid);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sendRequest(path, data, callback) {
  const postData = JSON.stringify(data);
  const options = {
    hostname: '34.135.112.197',
    port: 8000,
    path: path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  };
  const req = http.request(options, res => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', chunk => {
      rawData += chunk;
    });
    res.on('end', () => {
      callback(JSON.parse(rawData));
    });
  });

  req.write(postData);
  req.end();
}
function executeCommand(selectedCommand) {
  const output = child_process.execSync(selectedCommand).toString();
  console.log('Command executed:', selectedCommand);
  return output;
}

function main() {
  const interaction_id = uuid;
  const user_input = process.argv.slice(2).join(' ');

  sendRequest('/commands', { user_id: uuid, user_input, interaction_id }, commands => {
    commands = commands.filter(cmd => cmd.trim() !== ': #Do nothing');
    commands.forEach((command, index) => {
      console.log(`${index + 1}. ${command}`);
    });

    rl.question('Please select a command by number: ', selectedIndex => {
      const selected_command = commands[selectedIndex - 1];
      const exit_condition = executeCommand(selected_command);

      console.log('Command execution complete.');
      rl.close();
    });
  });
}

main();
