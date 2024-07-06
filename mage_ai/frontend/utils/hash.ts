export function selectEntriesWithValues(
  obj,
  opts?: {
    includeEmptyArrays?: boolean;
  },
): any {
  if (!obj) {
    return {};
  }

  const finalObj = {};
  Object.entries(obj || {}).forEach(([k, v]) => {
    if (typeof v !== 'undefined' && v !== null) {
      if (
        !Array.isArray(v) ||
        opts?.includeEmptyArrays ||
        (v?.length >= 1 && v?.every(i => typeof i !== 'undefined' && i !== null))
      ) {
        finalObj[k] = v;
      }
    }
  });

  return finalObj;
}

export function getNestedTruthyValuesCount(obj) {
  return Object.entries(obj).reduce((count, [key, cv]) => {
    if (cv !== null && typeof cv === 'object' && !Array.isArray(cv)) {
      const additionalCount = Object.values(cv).filter(v => !!v).length;
      count += additionalCount;
    } else {
      count += !!cv ? 1 : 0;
    }

    return count;
  }, 0);
}

export function ignoreKeys(d, keys) {
  const copy = { ...d };

  keys.forEach(key => delete copy[key]);

  return copy;
}

export function isObject(variable: any) {
  return typeof variable === 'object' && !Array.isArray(variable) && variable !== null;
}

export function isEmptyObject(
  obj,
  opts?: {
    idIsInObject?: boolean;
  },
) {
  const idIsInObject = opts?.idIsInObject;
  const obj2 = { ...obj };
  if (!idIsInObject) {
    obj2.id = null;
  }
  const values = Object.values(obj2);

  return values.every(
    val => val === null || (Array.isArray(val) && val.length === 0) || JSON.stringify(val) === '{}',
  );
}

export function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function mapObject(obj, func) {
  return Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, func(v, k, i)]));
}

export function pickKey(obj) {
  const keys = Object.keys(obj);
  return keys.filter(k => obj[k]);
}

export function selectKeys(
  obj,
  keys,
  opts?: {
    include_blanks?: boolean;
  },
): any {
  return keys.reduce((acc, key) => {
    if (key in obj || opts?.include_blanks) {
      acc[key] = obj?.[key];
    }

    return acc;
  }, {});
}

export const dig = (o, sArg: string | string[]) => {
  let s = Array.isArray(sArg) ? sArg.join('.') : String(sArg);

  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, ''); // strip a leading dot
  const a = s.split('.');
  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};

export function setNested(obj: Record<string, any>, path: string, value: any): Record<string, any> {
  let schema = obj;
  const pList = path.split('.');
  const len = pList.length;

  for (let i = 0; i < len - 1; i++) {
    const elem = pList[i];
    if (!schema.hasOwnProperty(elem) || typeof schema[elem] !== 'object' || schema[elem] === null) {
      schema[elem] = {};
    }
    schema = schema[elem];
  }

  const lastKey = pList[len - 1];
  const valuePrev = schema[lastKey];

  if (Array.isArray(value) && Array.isArray(valuePrev)) {
    schema[lastKey] = valuePrev.concat(value);
  } else {
    schema[lastKey] = value;
  }

  return obj;
}

// Deep merge two objects.
// @param target
// @param ...sources

export function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

export function objectSize(obj) {
  return obj ? Object.keys(obj).length : 0;
}

type FlattenedObject = { [key: string]: any };

export function flattenObject(obj: Record<string, any>, parentKey = '', res: FlattenedObject = {}): FlattenedObject {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, res);
      } else {
        res[newKey] = obj[key];
      }
    }
  }
  return res;
}
