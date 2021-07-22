/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {Icon} from '@chakra-ui/react'
import {ReactComponent as SnekSvg} from '../../common/snek-logo.svg'

type IconProps = {
  style?: React.CSSProperties
}

export const SnekIcon: React.FC<IconProps> = props => (
  <Icon as={SnekSvg} w={75} h={75} {...props} />
)
