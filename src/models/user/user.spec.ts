import userReducer, { UserState, logout } from './userSlice';

describe('counter reducer', () => {
  const user: UserState = {
    user: {
      email: 'asdf@asdf.asdf',
      name: 'asdf',
      department: 'asdf',
      studentId: 'asdf',
      phoneNumber: 'asdf',
    },
    status: 'idle',
    accessToken: 'asdf',
  };
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      user: null,
      accessToken: null,
      status: 'idle',
    });
  });

  it('should handle logout', () => {
    const actual = userReducer(user, logout());
    expect(actual.user).toEqual(null);
  });
});
