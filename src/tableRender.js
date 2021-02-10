import stateList from './stateList';

let TableRender = (props) => {
    let id = 0;

    let ageValidation = (age) => {
        if (Number.isInteger(age) && age >= 21) {
            return 'normalCell'
        }else{
            return 'redCell'
        }
    };

    let experienceValidation = (experience, age) => {
        if (experience >= 0 && experience < age) {
            return 'normalCell'
        }else{
            return 'redCell'
        }
    };

    let incomeValidation = (income) => {
        if (income <= 1000000 && income > 0) {
            return 'normalCell'
        }else{
            return 'redCell'
        }
    };

    let licDateValidation = (licDate) => {
        if (licDate.match(/^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$|^\d{4}[\-](0?[1-9]|1[0-2])[\-](0?[1-9]|[1-2][0-9]|3[01])$/) && Date.parse(licDate) > Date.now()) {
            return 'normalCell'
        }else{
            return 'redCell'
        }
    };

    let hasChildrenContent = (children) => {
        if (children === '') {
            return 'FALSE'
        }else{
            return children
        }
    };

    let hasChildrenValidation = (children) => {
        if (children === 'TRUE' || children === 'FALSE' || children === '') {
            return 'normalCell'
        }else{
            return 'redCell'
        }
    };

    let licNumberValidation = (licNumber) => {
        if (licNumber.match(/^\w{6}$/)) {
            return 'normalCell'
        }else{
            return 'redCell'
        }
    };

    let tableStyle = (key) => {
        if (Number.isInteger( key / 2 )) {
            return 'grey'
        }else{
            return 'white'
        }
    };

    let phoneFormat = (phone) => {
        if (phone.length === 10) {
            return ('+1' + phone)
        }else{
            if (phone.length === 11) {
                return ('+' + phone)
            }else{
                return (phone)
            }
        }
    };

    let states = (stateName) => {
        let stateShortName = stateName.split(/(?:,| )+/).map(licenseState => stateList.find(element => element.name === licenseState));

        if (stateShortName[0] !== undefined) {
            return (
                stateShortName.map(state => '|' + ' ' + state.abbreviation + ' ' + '|')
            )
        }else{
            return null
        }
    };

    let dublicateFinder = (phone, email, index) => {
        let duplicatePhone = props.file.findIndex(element => element.data.['Phone'] === phone);

        let duplicateEmail = props.file.findIndex(element => element.data.['Email'].toLowerCase() === email.toLowerCase());

        if (duplicatePhone === index && duplicateEmail === index) {
            return null
        } else {
            if (duplicatePhone === index && duplicateEmail !== index) {
                return duplicateEmail + 1
            } else {
                if (duplicatePhone !== index && duplicateEmail === index) {
                    return duplicatePhone + 1
                } else {
                    if (duplicatePhone !== index && duplicateEmail !== index) {
                        if (duplicatePhone > duplicateEmail) {
                            return duplicateEmail + 1
                        } else {
                            return duplicatePhone + 1
                        }
                    }
                }
            }
        }
    };

    return (
        <table>
            <tr className='table--header'>
                <th><b>Id</b></th>
                {Object.keys(props.file[0].data).map((element) => {
                    return (
                        <th><b>{element}</b></th>
                    )
                })}
                <th><b>Duplicate with</b></th>
            </tr>
            {props.file.map((person, index) => {
                id = id+1;
                return (
                    <tr className={tableStyle(id)}>
                        <td>{id}</td>
                        <td>
                            {person.data['Full Name'].trim()}
                        </td>
                        <td>
                            {phoneFormat(person.data['Phone'])}
                        </td>
                        <td>
                            {person.data['Email']}
                        </td>
                        <td className={ageValidation(parseFloat(person.data['Age'].replace(',', '.')))}>
                            {person.data['Age']}
                        </td>
                        <td className={experienceValidation(person.data['Experience'], person.data['Age'])}>
                            {person.data['Experience']}
                        </td>
                        <td className={incomeValidation(person.data['Yearly Income'])}>
                            {(Math.round(person.data['Yearly Income'] * 100) / 100).toFixed(2)}
                        </td>
                        <td className={hasChildrenValidation(person.data['Has children'])}>
                            {hasChildrenContent(person.data['Has children'])}
                        </td>
                        <td>
                            {states(person.data['License states'])}
                        </td>
                        <td className={licDateValidation(person.data['Expiration date'])}>
                            {person.data['Expiration date']}
                        </td>
                        <td className={licNumberValidation(person.data['License number'])}>
                            {person.data['License number']}
                        </td>
                        <td>
                            {dublicateFinder(person.data['Phone'], person.data['Email'], index)}
                        </td>
                    </tr>
                )
            })}
        </table>
    )
};

export default TableRender;