import Ember from 'ember';

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
  Ember.assert('This event has been renamed from `keyPress` to `key-press`, please rename occordingly');
}
