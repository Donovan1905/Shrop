import redis, { createClient} from 'redis';

export default {
    createConection: async () => {
            const client = createClient({
                url: 'redis://default:RedisAdmin69@cache:6379'
            });
            client.on('error', (err) => { console.log(err); });

            await client.connect();

            // await client.set("key", "value");
            // console.log("connection established");
            // const value = await client.get("key");
            // console.log("value: " + value);
            return client;
    }
}
