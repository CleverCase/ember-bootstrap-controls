import { assert } from '@ember/debug';
import { dasherize } from '@ember/string';

export default function asserIfUsingRenamedEvents(component) {
  const keyPress = component.get('keyPress');
  if (keyPress) {
    assertEvent('keyPress');
  }

  const keyUp = component.get('keyUp');
  if (keyUp) {
    assertEvent('keyUp');
  }

  const keyDown = component.get('keyDown');
  if (keyDown) {
    assertEvent('keyDown');
  }
}

function assertEvent(eventName) {
  const dasherizedEventName = dasherize(eventName);
  assert(`This event has been renamed from "${eventName}" to "${dasherizedEventName}", please rename occordingly`);
}
