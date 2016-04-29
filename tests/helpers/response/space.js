import Ember from 'ember';

export default function spaceRes() {
  let jsonResponse = `
    {
      "sys": {
        "type": "Space",
          "id": "m21hvnsjmt8a"
      },
      "name": "BlankTest",
        "locales": [
        {
          "code": "en-US",
          "default": true,
          "name": "U.S. English"
        }
      ]
    }
  `;
  return Ember.$.parseJSON(jsonResponse);
}

let spaceResponse = spaceRes();

export {spaceResponse};
