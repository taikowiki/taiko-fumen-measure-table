import { parseArgs } from "util";

const { values } = parseArgs({
    args: Bun.argv,
    options: {
        'internal-key': {
            type: 'string'
        }
    },
    allowPositionals: true,
    strict: false
});

if (!("internal-key" in values) || typeof (values['internal-key']) !== "string") {
    process.exit(1);
}

const response = await fetch('https://rating.taiko.wiki/api/internal/update-measure', {
    method: 'get',
    headers: {
        'x-internal-key': values['internal-key']
    }
});

console.log(response.status);
if(response.status !== 200){
    process.exit(1);
}

process.exit();