
'use strict';

jest.autoMockOff();
const Xor = require('../lib/Xor').default;

let list = [
  '^6gvnHJ[',
  '1cTkoQ7*',
  '.U3H<sk=',
  'gao8Ufdn',
  'kK5fDEuO',
  'p&QsR2[V',
  'd8xg5/_',
  'KhRql^C9',
  'I57u#8Mb',
  'T!-rlSO$',
  'vifuwan.',
  'medukoh{',
  'bamewip?',
  'terodyk?',
  'tuxetuq$',
  'supyvef*',
  'hamosol.',
  'jamuxan{',
  'lokexip{',
  'henucif}',
  'hNHlQPfD4s',
  'KByPgmXVUJ',
  'YQDzYW9Oqu',
  'hLsSmimeiF',
  '6qYG2qYfOc',
  'vZHYJj4xkO',
  'FKD8EwfFEt',
  'dr4QxoV8x9',
  'NS31cKVjcx',
  'yMKoIOL0PL',
  '3LAi[R_!:peIRomV:r?cPWxCQ',
  '-zCAl.i}Xr(Q8"BGG__{8JXj}',
  'hxkOs(5vchOKp9C1/e/y?v=5,',
  '*iDtND)u+_F:ow.tj6eAtYM"a',
  'hO6N-eNEbmKfCIBf:>gBFkO-d',
  'jfT%MHXeZ7qEb[]V*5F4"29"f',
  '["6m5]O>r6/xudBCcdre8.h]A',
  '}N=xb}DA"K{BX3TR/phYRNedw',
  '6[8(Eq_D!_+D*}w~N[:NftnY~',
  'pgC+oFX%G>tx?lQ{i5huWM4mb',
  'Bt_fJ>~Y_{ndlOOt_U-J_ZzU_',
  '9P)J/qI<gq}Z~Mscsa%4cmsda',
  '/4g6W|.ONfY{D=e]";pP{I}aR',
  'Z0YIM4HM0(DuDv4x[C5>up+),',
  '8N}:F0u]*biW}:g/%pXV+E:La',
  'EV0m,eJZai}NEIwVy8W_q1=g+',
  'rX1b1;!C;PwGxmculMjk;Db9H',
  '"_WRH]8UL}oD/GXehEakpzs4M',
  'wysES!Y)sOWgK2rfgt/A.iPZw',
  'FUWa7mgTGnQQ6a.jZJ<]Xq",,'
];

describe('Xor', () => {

  it('should encode and then decode string', () => {
    let xor = new Xor;

    list.map((currentPass) => {
      let salt = xor.process(currentPass, "qwerty");
      let result = xor.undo(salt, "qwerty");
      expect(currentPass).toEqual(result);
    });

  });

});