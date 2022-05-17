type User = {
    name:string;
    lastName:string;
    birthday: string;
    age?: number;
}

const gabriel: User = {
    name: 'gabriel',
    lastName: 'ramos',
    birthday: '29/01/1996'
}

//union types
// | (como se fosse o ||)

type logLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: logLevel) {
    console.log(`${level} - ${message}`)
}

logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'info')
logMessage('Uma mensagem info', 'debug')

//intersectio types: &
type About = {
    bio:string;
    interest:string[]
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'gabriel',
    lastName: 'pires',
    birthday: '29/01,1996',
    bio: 'Olá, meu nome é grabriel',
    interest: ['gatos', 'música', 'fotografia']
}

type ComposedProfile = User & {
    log: logLevel;
}