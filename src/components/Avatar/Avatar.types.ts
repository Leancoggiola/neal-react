export interface AvatarProps {
    src?: string;
    userName?: string,
    description?: string;
    interactive?: boolean;
    size?: 'small' | 'medium' | 'large';
    status?: 'online' | 'no-disturb' | 'no-available' | 'absent' | 'warning' | 'offline';
    variant?: 'image' | 'icon';
    disabled?: boolean;
    className?: string;
}