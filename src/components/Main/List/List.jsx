import React, from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MonevOff } from '@material-ui/icons';
import useStyles from './styles';
const List = () => {
    const classes = useStyles();
    const transaction = [
        { id: 1, type: "Income", category: 'Salary', amount: 50, data: new Date() }
    ];
    return (
        <MUIList dense={false} className={classes.List}>
            {transaction.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MonevOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={'$${transaction.amount} - ${transaction.date}'} />
                        <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>

                        </ListItemSecondaryAction>
                    </ListItem>

                </Slide>

            ))}
        </MUIList >
    );
};

export default List;