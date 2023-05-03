#!usr/bin/env node
// the code to run the server hehe
import minimist from "minimist"
import express from "express"
// import {rps} from "./lib/rpsls.js"
// import {rpsls} from "./lib.rpsls.js"

const app = express()

// take in arbitrary port number from command line - set default to 5000


const args = minimist(process.argv.slice(2));
const port = args.port || 5000; // don't think this is working quite right yet... check later

app.listen(
 port, () => console.log(port)
)



