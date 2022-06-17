import React, { FC } from 'react';
import { Layout, Menu, MenuProps, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
    const navigate = useNavigate();
    const { isAuth, user } = useTypedSelector(state => state.auth);
    const {logout} = useActions();

    const unauthorizedList: MenuProps['items'] = [
        {
            key: 1,
            label: 'Логин',
            onClick(){
                navigate('./', { replace: true });
            },
        },
    ];

    const authorizedList: MenuProps['items'] = [
        {
            key: 1,
            label: 'Выйти',
            onClick: () => logout(),
        },
    ];

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth && 
                    <div 
                        className="logo" 
                        style={{color: '#fff'}}
                    >
                        {user.username}
                    </div>
                }
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items={isAuth ? authorizedList : unauthorizedList}
                />
            </Row>
        </Layout.Header>
    );
};

export default Navbar;