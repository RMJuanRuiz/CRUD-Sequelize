const { CRUD } = require('./helpers');
const db = require('./models');

const params = process.argv;

if (params.length <= 2) {
    process.exit(0);
}

const args = params.slice(2);
const command = args[0].split(':')[0].substring(2);
const entity = args[0].split(':')[1];
let data = {};
let id = null;

const setData = () => {
    args.slice(1).map((arg) => {
        const tmp = arg.split("=");
        data[tmp[0].substring(2)] = tmp[1];
    });
}

switch (command) {
    case CRUD.CREATE:
        setData();

        db[entity]
            .create(data)
            .then(() => console.log('Contact created!'))
            .catch(console.log);

        break;

    case CRUD.READ:
        db[entity]
            .findAll()
            .then(console.log)
            .catch(console.log);

        break;

    case CRUD.UPDATE:
        setData();

        id = data.id;
        if (!id) {
            throw new Error('Error, ID is required!');
        }

        delete data.id;

        db[entity]
            .update(data, { where: { id } })
            .then(() => console.log('Contact updated!'))
            .catch(console.log);
        break;

    case CRUD.DELETE:
        setData();

        id = data.id;
        if (!id) {
            throw new Error('Error, ID is required!');
        }

        db[entity]
            .destroy({
                where: { id }
            })
            .then(() => console.log('Contact deleted!'))
            .catch(console.log);

        break;

    default:
        console.log('Operation not found!');
        break;
}