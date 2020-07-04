const db = require('../db');

const ApiError = require('../utils/error');
const catchAsync = require('../utils/catchAsync');

exports.create = catchAsync(async (req, res, next) => {
  // TODO: validate req body
  const user = await db('accounts')
    .select('id')
    .where('email', req.body.email)
    .orWhere('phone', req.body.phone)
    .first();

  if (user) {
    return next(new ApiError(422, 'Such account already exists.'));
  }

  const [account] = await db('accounts')
    .insert(req.body)
    .returning('*');

  return res.json({
    result: 'success',
    data: {
      account,
    },
  });
});
