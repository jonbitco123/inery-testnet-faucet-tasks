import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'ineryjs';
const Create = async (id, user, data) => {
try {
    const hashtx = await Userapi.transact(
      {
        actions: [
          {
            account,
            name: "create",
            authorization: [
              {
                actor,
                permission: "active",
              },
            ],
            data: {
              id,
              user,
              data,
            },
          },
        ],
      },
      { broadcast: true, sign: true }
    );

    console.log(hashtx);
  } catch (err) {
    console.log(err);
  }
};

const Read = async (id) => {
  try {
    const hashId = await Userapi.transact(
      {
        actions: [
          {
            account,
            name: "read",
            authorization: [
              {
                actor,
                permission: "active",
              },
            ],
            data: {
              id,
            },
          },
        ],
      },
      { broadcast: true, sign: true }
    );
    console.log(hashId);
  } catch (error) {
    console.log(error);
  }
};

const Push = async (HasId, user, data) => {
  await Create(HasId, user, data);
  await Read(HasId);
};

Push(10543230, account, "inery task4");