import { action } from 'typesafe-actions';
export enum Actions {
  CHANGE_NAME = '@mainpage/name'
}

export const changeName = (newName: string) => action(Actions.CHANGE_NAME, newName)

