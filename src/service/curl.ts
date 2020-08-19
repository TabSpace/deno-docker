import { Context } from "../types.d.ts";

const fname = "[curl]";

export async function curl(ctx: Context, options: any) {
  const extra = {
    url: "",
    dataType: "json",
  };

  const conf = {
    ...extra,
    ...options,
  };

  const reqId = "";
  const startTime = Date.now();

  const fetchOptions = { ...conf };
  Object.keys(extra).forEach(key => {
    delete fetchOptions[key];
  });

  const startMsg = [
    `${fname} start:`,
    `url: ${conf.url}`,
    JSON.stringify(fetchOptions),
  ].join('\n');
  ctx.logger?.info(startMsg);

  let error = null;
  let rs = null;
  let data = null;
  try {
    rs = await fetch(conf.url, fetchOptions);
    if (conf.dataType === "json") {
      data = rs.json() || null;
    } else {
      data = rs.text() || null;
    }
  } catch (err) {
    error = err;
  }

  if (!data) {
    error = new Error("response empty");
  }

  const wrapMsg = (msg: string) => {
    const dur = `[duration: ${Date.now() - startTime}ms]`;
    return `${fname}[${reqId}] ${msg} ${dur}`;
  };

  if (error) {
    const errMsg = [
      wrapMsg(`error: [${rs?.status}] ${error.message}`),
      `${error.stack}`,
    ].join('\n');
    ctx.logger?.fail(errMsg);
  } else {
    const strRs = JSON.stringify(data);
    let rsMsg = '';
    if (strRs.length > 600) {
      const pre300 = strRs.slice(0, 300);
      const end300 = strRs.slice(strRs.length - 300);
      rsMsg = `${pre300} ....... ${end300}`;
    } else {
      rsMsg = strRs;
    }
    const endMsg = [
      wrapMsg(`end: [${rs?.status}]`),
      rsMsg,
    ].join('\n');
    ctx.logger?.success(endMsg);
  }

  return data;
}
