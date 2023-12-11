import { ConfigPlugin } from '@expo/config-plugins';

// PICKUP: u only need a plugin if u wna tot transport a node specific module to theexpo..
// dont need.. skip that.

const withNewName: ConfigPlugin<{
    name?: string
}> = (config, { name = 'expo-clear-input' } = {}) => {
    config.name = name;
    return config;
};

export default withNewName;