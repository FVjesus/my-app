/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.NzEzMTI5ODU.Ka5NGf6SLHvO6GwIWEbxUEt3SofBb6OFXfnWzK6mt3w`;

const get = async (
  path: string,
  params: Record<string, any> = {}
): Promise<any> => {
  const url = new URL(`http://192.168.0.107:8000/v1${path}`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const response = await fetch(url.toString(), {
    headers: {
      Authorization,
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return response.json();
  }
  throw new Error("Request Failure");
};

const post = async (path: string, body: any): Promise<any> => {
  const response = await fetch(`http://192.168.0.107:8000/v1${path}`, {
    method: "POST",
    headers: {
      Authorization,
    },
    body,
  });
  if (response.status === 200) {
    return response.json();
  }
  throw new Error("Request Failure");
};

export const Client = {
  get,
  post,
};
