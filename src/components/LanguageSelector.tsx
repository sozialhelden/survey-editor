import { Button, MenuItem } from '@blueprintjs/core';
import { ItemRenderer, ItemPredicate, Select } from '@blueprintjs/select';
import * as React from 'react';


const LanguageSelect = Select.ofType<string>();

type Props = {
    language: string;
    languages: string[];
    onChange: ((language: string) => void);
};

const renderItem: ItemRenderer<string> = (language: string, options) => {
    return <MenuItem
        text={language}
        // active={true}
        onClick={options.handleClick}
        shouldDismissPopover={false}
    />
}

export default function LanguageSelector(props: Props) {
    const onItemSelect = React.useCallback((language: string) => {
        props.onChange(language);
    }, [props]);

    return <LanguageSelect
        items={props.languages}
        itemRenderer={renderItem}
        activeItem={props.language}
        noResults={<MenuItem disabled={true} text="No languages loaded yet." />}
        onItemSelect={onItemSelect}
        filterable={false}
    >
        {/* children become the popover target; render value here */}
        <Button text={props.language} rightIcon="double-caret-vertical" />
    </LanguageSelect>;
}

