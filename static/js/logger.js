function print(func, args, txt)
{
    func(`${args.callee.name}: ${txt}`)
}

function err(args, txt)
{
    print(console.error, args, txt)
}

function warn(args, txt)
{
    print(console.warn, args, txt)
}