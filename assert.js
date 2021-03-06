const assert  = require('assert');

//AssertionError ，用于比较错误信息

const {message} = new assert.AssertionError({
   actual: 1,
    expected: 2,
    operator: 'strictEqual'
});

//验证
try{
    assert.strictEqual(1,2);
}catch (err) {

    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected, 2);
    assert.strictEqual(err.code, 'ERR_ASSERTION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true);

}
